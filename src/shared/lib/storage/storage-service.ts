import { StorageKey } from '@/shared/config';

export interface StorageLike {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

/**
 * In-memory fallback (SSR / private mode / errors)
 */
const createMemoryStorage = (): StorageLike => {
  const store = new Map<string, string>();

  return {
    getItem: key => store.get(key) ?? null,
    setItem: (key, value) => {
      store.set(key, value);
    },
    removeItem: key => {
      store.delete(key);
    },
  };
};

/**
 * Safe access to browser storage
 */
const getSafeStorage = (type: 'local' | 'session'): StorageLike => {
  try {
    if (typeof window !== 'undefined') {
      const storage =
        type === 'local' ? window.localStorage : window.sessionStorage;

      const testKey = '__test__';
      storage.setItem(testKey, '1');
      storage.removeItem(testKey);

      return storage;
    }
  } catch {
    // ignore
  }

  return createMemoryStorage();
};

export const localStorageSafe = getSafeStorage('local');
export const sessionStorageSafe = getSafeStorage('session');

/**
 * Simple typed wrapper (sync, не для redux-persist)
 */
export const createStorageService = (
  storage: StorageLike = localStorageSafe,
) => {
  return {
    get<T>(key: string): T | null {
      try {
        const value = storage.getItem(key);
        return value ? (JSON.parse(value) as T) : null;
      } catch {
        return null;
      }
    },

    set<T>(key: string, value: T): void {
      try {
        storage.setItem(key, JSON.stringify(value));
      } catch {
        // ignore write errors
      }
    },

    remove(key: string): void {
      try {
        storage.removeItem(key);
      } catch {
        // ignore
      }
    },
  };
};

/**
 * ===== Remember flag (источник истины) =====
 */

export const rememberStorage = {
  get(): boolean {
    try {
      return localStorageSafe.getItem(StorageKey.REMEMBER_KEY) === 'true';
    } catch {
      return false;
    }
  },

  set(value: boolean) {
    try {
      localStorageSafe.setItem(StorageKey.REMEMBER_KEY, String(value));
    } catch {
      // ignore
    }
  },
};

/**
 * ===== Async adapter для redux-persist =====
 */
export interface AsyncStorage {
  getItem(key: string): Promise<string | null>;
  setItem(key: string, value: string): Promise<void>;
  removeItem(key: string): Promise<void>;
}

const toAsyncStorage = (storage: StorageLike): AsyncStorage => ({
  getItem: key => Promise.resolve(storage.getItem(key)),
  setItem: (key, value) => {
    storage.setItem(key, value);
    return Promise.resolve();
  },
  removeItem: key => {
    storage.removeItem(key);
    return Promise.resolve();
  },
});

/**
 * ===== Dynamic storage (ключевая часть) =====
 */
export const createDynamicStorage = (): AsyncStorage => {
  const local = toAsyncStorage(localStorageSafe);
  const session = toAsyncStorage(sessionStorageSafe);

  return {
    async getItem(key) {
      // сначала local (remember=true), потом session
      const localValue = await local.getItem(key);
      if (localValue) return localValue;

      return session.getItem(key);
    },

    async setItem(key, value) {
      if (rememberStorage.get()) {
        await local.setItem(key, value);
        await session.removeItem(key);
      } else {
        await session.setItem(key, value);
        await local.removeItem(key);
      }
    },

    async removeItem(key) {
      await local.removeItem(key);
      await session.removeItem(key);
    },
  };
};

/**
 * Default sync service (если нужен вне persist)
 */
export const storageService = createStorageService(localStorageSafe);

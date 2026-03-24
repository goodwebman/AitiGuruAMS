export interface StorageLike {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

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

const getSafeStorage = (): StorageLike => {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const testKey = '__test__';
      window.localStorage.setItem(testKey, '1');
      window.localStorage.removeItem(testKey);
      return window.localStorage;
    }
  } catch (e) {
    console.error(e, ' getSafeStorage error');
  }

  return createMemoryStorage();
};

export const createStorageService = (
  storage: StorageLike = getSafeStorage(),
) => {
  return {
    get<T>(key: string): T | null {
      try {
        const value = storage.getItem(key);
        if (!value) return null;
        return JSON.parse(value) as T;
      } catch (error) {
        console.warn(`[Storage] get error for key "${key}"`, error);
        return null;
      }
    },

    set<T>(key: string, value: T): void {
      try {
        storage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.warn(`[Storage] set error for key "${key}"`, error);
      }
    },

    remove(key: string): void {
      try {
        storage.removeItem(key);
      } catch (error) {
        console.warn(`[Storage] remove error for key "${key}"`, error);
      }
    },
  };
};

export const storageService = createStorageService();

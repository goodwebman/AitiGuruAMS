export const productKeys = {
  all: ['products'] as const,
  list: (params: any) => [...productKeys.all, params] as const,
}
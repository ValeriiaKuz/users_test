import { describe, it, expect, vi, afterEach } from 'vitest';
import { axiosRequest, fetchUsers } from './requests';

const mocks = vi.hoisted(() => ({
  get: vi.fn(),
  post: vi.fn()
}));

vi.mock('axios', async (importActual) => {
  const actual = await importActual<typeof import('axios')>();

  const mockAxios = {
    default: {
      ...actual.default,
      create: vi.fn(() => ({
        ...actual.default.create(),
        get: mocks.get,
        post: mocks.post
      }))
    }
  };

  return mockAxios;
});
describe('fetchUsers', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should fetch users successfully', async () => {
    const mockUsers = [{ id: 1, name: 'user', username: 'name', email: 'email@test.ru' }];

    (axiosRequest.get as vi.Mock).mockResolvedValue({ data: mockUsers });

    const result = await fetchUsers();

    expect(result).toEqual({ data: mockUsers });
    expect(axiosRequest.get).toHaveBeenCalledWith('/users');
  });

  it('should throw an error when fetching users fails', async () => {
    const errorMessage = 'Error';
    (axiosRequest.get as vi.Mock).mockRejectedValue(new Error(errorMessage));

    await expect(fetchUsers()).rejects.toThrow(errorMessage);
    expect(axiosRequest.get).toHaveBeenCalledWith('/users');
  });
});

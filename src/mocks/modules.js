export const mockJschannel = {
    build: jest.fn(() => ({
        bind: jest.fn(),
        call: jest.fn(),
        notify: jest.fn(),
    })),
};

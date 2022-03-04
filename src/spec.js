import appsInit from './Apps';
import './Bigcommerce';
import utilInit from './Utils';
import { mockIframeWindow, mockJschannel, resetWindowMock } from './mocks';

jest.mock("./Apps", () => ({ __esModule: true, default: jest.fn() }));
jest.mock("./Utils", () => ({ __esModule: true, default: jest.fn() }));
jest.mock('jschannel', () => mockJschannel);

describe('Bigcommerce SDK', () => {
    it('should properly add the BC object to window', () => {
        expect(window.Bigcommerce).toBeDefined();
    });

    describe('init', () => {
        beforeEach(() => {
            mockIframeWindow();
            window.Bigcommerce.init();
        });

        afterEach(() => {
            resetWindowMock();
        });

        it('should initialize apps and utilities', () => {
            expect(utilInit).toHaveBeenCalled();
            expect(appsInit).toHaveBeenCalled();
        });
    });
});

import appsInit from '../Apps';
import '../Bigcommerce';
import utilInit from '../Utils';
import { mockIframeWindow, resetWindowMock } from '../mocks';
import configService from './config';

jest.mock("../Apps", () => ({ __esModule: true, default: jest.fn() }));
jest.mock("../Utils", () => ({ __esModule: true, default: jest.fn() }));

describe('config service', () => {
    it('should load default config', () => {
        expect(configService.get('Apps')).toBeDefined();
        expect(configService.get('clientID')).toBeDefined();
        expect(configService.get('postMessage')).toBeDefined();
        expect(configService.get('onLogout')).toBeNull();
    });

    describe('setting config', () => {
        beforeEach(() => {
            mockIframeWindow();

            window.Bigcommerce.init({
                onLogout: () => '',
            });
        });

        afterEach(() => {
            resetWindowMock();
        });

        it('should set options that are passed in', () => {
            expect(configService.get('onLogout')).not.toBeNull();
            expect(typeof configService.get('onLogout')).toBe('function');
        });
    });
});

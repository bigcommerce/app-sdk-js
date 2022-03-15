const { self, top } = window;

export const mockIframeWindow = () => {
    // Need to change obj reference to fake being in an iframe (window.self !== window.top)
    delete window.self; // remove existing
    delete window.top;
    window.self = { ...self }; // create new ref
    window.top = { ...top };
};

export const resetWindowMock = () => {
    window.self = self;
    window.top = top;
};

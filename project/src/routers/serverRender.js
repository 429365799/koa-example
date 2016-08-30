import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';

const App = require('../views/app.js').default;

export default function handleRender (ctx, next) {
    const html = renderToString(<App />)
    ctx.body = html;
}

function runderFullPage (html, preloadState) {
    return `
        
    `
}
"use client";

import { useEffect } from "react";

export default function HattieAI() {
    useEffect(() => {
        const timer = setTimeout(() => {
            const container = document.createElement('div');
            container.id = 'hattie-ai-isolated';
            
            // Responsive positioning
            const isMobile = window.innerWidth < 768;
            if (isMobile) {
                container.style.cssText = 'position: fixed !important; inset: 0 !important; z-index: 999999 !important; pointer-events: none !important;';
            } else {
                container.style.cssText = 'position: fixed !important; inset: 0 !important; z-index: 999999 !important; pointer-events: none !important;';
            }
            
            const iframe = document.createElement('iframe');
            iframe.style.cssText = 'width: 100% !important; height: 100% !important; border: none !important; background: transparent !important; pointer-events: auto !important;';
            iframe.setAttribute('allowtransparency', 'true');
            
            iframe.onload = () => {
                const iframeDoc = iframe.contentDocument;
                if (iframeDoc) {
                    iframeDoc.open();
                    iframeDoc.write('<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"><script>window.HattieAI={tenantId:"266ffaed-a6f1-44bf-9445-6ade0c68945c"};</script><link rel="stylesheet" href="https://hattieai.touchpointe.digital/assets/index.css"><script type="module" src="https://hattieai.touchpointe.digital/assets/index.js"></script><style>html,body{margin:0;padding:0;overflow:hidden;background:transparent !important;}</style></head><body></body></html>');
                    iframeDoc.close();
                }
            };
            
            container.appendChild(iframe);
            document.body.appendChild(container);
            

        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return null;
}

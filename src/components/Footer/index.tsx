import * as React from 'react';
import './Footer.css'

export interface FooterProps {
}

export function Footer(props: FooterProps) {
    return (
        <React.Fragment>
            <span className="footer">&copy; Meghna Srivastava</span>
        </React.Fragment>
    );
}
import React from 'react';

function Layout({children}) {
    return (
        <div>
            <div>여기는 Header 입니다.</div>
            {children}
            <div>여기는 Footer 입니다.</div>
        </div>
    )
}

export default function LayoutComponent() {
    return (
        <Layout>
            <div>
                <p>BODY</p>
            </div>
        </Layout>
    )
}
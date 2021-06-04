
( () => {
    const properties = function () {
        return {
            prefix: '/',
            proxy: '/api/proxy',
            mapServer: '/mapStudio/'
        };
    }

    window.uitgis = window.uitgis || {}
    
    window.uitgis.properties = new properties();

} )();
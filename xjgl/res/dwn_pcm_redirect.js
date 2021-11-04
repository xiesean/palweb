
(function (url, is_mobile) {
    function setCookie(c_name, value, expiredays) {
        var exdate = new Date()
        exdate.setDate(exdate.getDate() + expiredays)
        document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString())
    }
    function getCookie(c_name) {
        if (document.cookie.length > 0) {
            c_start = document.cookie.indexOf(c_name + "=")
            if (c_start != -1) {
                c_start = c_start + c_name.length + 1
                c_end = document.cookie.indexOf(";", c_start)
                if (c_end == -1) c_end = document.cookie.length
                return unescape(document.cookie.substring(c_start, c_end))
            }
        }
        return ""
    }

    if (location.href.indexOf('?pc=') >= 0 || location.href.indexOf('&pc=') >= 0) {
        setCookie('force_pc', 1, 1);
        return;
    }
    if (getCookie('force_pc')) {
        return;
    }
    if (is_mobile) {
        if (document.getElementsByTagName('meta').length > 0) {
            var metas = document.getElementsByTagName('meta');
            for (var i = 0; i < metas.length; i++) {
                var meta = metas[i];
                if (meta.name == 'mobile-agent') {
                    var url = meta.content.split('=');
                    url.shift();
                    url.shift();
                    location.href = url.join('=');
                    break;
                }
            }
        } else {
            // location.href = url.replace('xsadmin.', 'www.').replace('www.', 'www.');
        }

    } else {
        if (document.getElementsByTagName('link').length > 0) {
            var links = document.getElementsByTagName('link');
            for (var i = 0; i < links.length; i++) {
                var link = links[i];
                if (link.rel == 'canonical') {
                    var url = link.href;
                    if (location.href.indexOf(url) < 0
                        || (location.href.split('?')[0] != url && url.match(/\/$/))
                    ) {
                        location.href = url;
                    }
                    break;
                }
            }
        } else {
        }

    }

})(location.href.split('?')[0].toLowerCase(), navigator.userAgent.toLowerCase().indexOf('mobile') >= 0 || navigator.userAgent.toLowerCase().indexOf('android') >= 0)
Mc = 'undefined' != typeof Mc 
    ? Mc : {};

Mc.Template = Mc.Template || {};

Mc.Template.buildList = function(arr, orders){
    var arrHtml = {};
    arr = McDateUtil.sortByTime(arr, 1);

    arrHtml['unknown type'] = new StringBuffer();
    arrHtml['unknown type'].append('<h3>unknown type</h3>');
    arrHtml['unknown type'].append('<ul>');

    for(var i=0,len=arr.length;i<len;i++){
        if(arr[i].type && !arrHtml[arr[i].type]){
            arrHtml[arr[i].type] = new StringBuffer();
            arrHtml[arr[i].type].append('<h3>' + arr[i].type + '</h3>');
            arrHtml[arr[i].type].append('<ul>');
        }
        if(!arr[i].type){
            arr[i].type = 'unknown type';
        }

        arrHtml[arr[i].type].append('<li>');
        arrHtml[arr[i].type].append('<span class="title">&#8226;&nbsp;<a mon="ph" href="');
        arrHtml[arr[i].type].append(arr[i].href);
        arrHtml[arr[i].type].append('" target="');
        arrHtml[arr[i].type].append(arr[i].target);
        arrHtml[arr[i].type].append('">');
        arrHtml[arr[i].type].append(arr[i].title);
        arrHtml[arr[i].type].append('</a></span><span class="time">');
        arrHtml[arr[i].type].append(arr[i].time);
        arrHtml[arr[i].type].append('</span></li>');
    }

    var sb = new StringBuffer();
    for(var i=0; i<orders.length; i++){
        var prop = orders[i];
        if('undefined' == typeof arrHtml[prop] 
            || 2 == arrHtml[prop].len()) {
            continue;
        }
        arrHtml[prop].append('</ul>');
        sb.append(arrHtml[prop].toString());
    }

    document.write(sb.toString());
};

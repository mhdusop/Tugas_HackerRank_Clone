const containerHackers = document.getElementById('container-hackers');
const containerBlogs = document.getElementById('container-blogs');
const api = 'https://picsum.photos/';
let inc = 4;

const tooltipData = [
    {
        desc : 'It covers topics like MVC Frameworks, Components (Angular, Dynamic, Styling), TypeScript, Two Way Binding and Form Validation',
        link : 'https://www.hackerrank.com/skills-directory/angular_basic'
    },
    {
        desc : 'It covers topics like Routing, NgModules, Observables for data transmission and event handling, Dependency Injections, and APIs.',
        link : 'https://www.hackerrank.com/skills-directory/angular_intermediate'
    },
    {
        desc : 'This competency area includes understanding the structure of C# programs, types, and Variables, basic OOP, Properties and Indexers, Collections, Exception handling, among others.',
        link : 'https://www.hackerrank.com/skills-directory/c_sharp_basic'
    },
    {
        desc : 'It covers topics like exploring Cascading and Inheritance, exploring text styling fundamentals, understanding the use of layouts in CSS, understand the boxing of elements in CSS, among others.',
        link : 'https://www.hackerrank.com/skills-directory/css'
    },
    {
        desc : 'It include working with functions, pointers, file handling, building web services in Go and error handling.',
        link : 'https://www.hackerrank.com/skills-directory/golang_intermediate'
    },
    {
        desc : 'It covers topics like basic language features of Golang, simple data structures, arrays, maps, data types, and interfaces.',
        link : 'https://www.hackerrank.com/skills-directory/golang_basic'
    },
    {
        desc : 'It will cover basic topics in Java language such as classes, data structures, inheritance, exception handling, etc. You are expected to be proficient in either Java 7 or Java 8.',
        link : 'https://www.hackerrank.com/skills-directory/java_basic'
    },
    {
        desc : 'It covers topics like Design Patterns, Memory management, concurrency model, and event loops, among others.',
        link : 'https://www.hackerrank.com/skills-directory/javascript_intermediate'
    },
    {
        desc : 'It covers topics like, Functions, Currying, Hoisting, Scope, Inheritance, Events and Error Handling.',
        link : 'https://www.hackerrank.com/skills-directory/javascript_basic'
    },
    {
        desc : 'It covers topics like Package and Modules Management, Callbacks, Event Loop, Event Emitter, Buffers, Streams and File Systems',
        link : 'https://www.hackerrank.com/skills-directory/nodejs_basic'
    },
    {
        desc : 'Understand the concepts behind an Event-Driven Architecture and Concurrency',
        link : 'https://www.hackerrank.com/skills-directory/nodejs_intermediate'
    },
    {
        desc : 'It covers basic topics of Data Structures (such as Arrays, Strings) and Algorithms (such as Sorting and Searching).',
        link : 'https://www.hackerrank.com/skills-directory/problem_solving_basic'
    },
    {
        desc : 'It covers topics of Data Structures (such as HashMaps, Stacks and Queues) and Algorithms (such as Optimal Solutions).',
        link : 'https://www.hackerrank.com/skills-directory/problem_solving_intermediate'
    },
    {
        desc : 'It covers topics like Scalar Types, Operators and Control Flow, Strings, Collections and Iteration, Modularity, Objects and Types and Classes',
        link : 'https://www.hackerrank.com/skills-directory/python_basic'
    },
    {
        desc : 'It includes slightly advanced concepts of the R programming language such as conditional statements, loops, and functions, writing efficient and readable code, regular expressions in R, data structure manipulations, and times and dates.',
        link : 'https://www.hackerrank.com/skills-directory/r_intermediate'
    },
    {
        desc : 'This competency area includes fundamentals of the R programming language, understanding Data Frames, Packages, and Data Reshaping, using Data interfaces, among others.',
        link : 'https://www.hackerrank.com/skills-directory/r_basic'
    },
    {
        desc : 'React (Basic) It covers topics like Basic Routing, Rendering Elements,State Management (Internal Component State), Handling Events, ES6 and JavaScript and Form Validation.',
        link : 'https://www.hackerrank.com/skills-directory/react_basic'
    },
    {
        desc : 'It covers topics like getting data from an API and process using parameters or paging.',
        link : 'https://www.hackerrank.com/skills-directory/rest_api_intermediate'
    },
    {
        desc : 'It covers topics like query optimization, data modeling, Indexing, window functions, and pivots in SQL.',
        link : 'https://www.hackerrank.com/skills-directory/sql_advanced'
    },
    {
        desc : 'It includes complex joins, unions, and sub-queries.',
        link : 'https://www.hackerrank.com/skills-directory/sql_intermediate'
    },
    {
        desc : 'It includes simple queries, relationships, and aggregators.',
        link : 'https://www.hackerrank.com/skills-directory/sql_basic'
    }
];

$('.ui-icon-search').addClass('text-slate-300');

function randomString(length) {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, length);
}

function focusSearchBar() {
    $('.ui-icon-search').removeClass('text-slate-300');
    $('.ac-input').removeClass('spannedout');
    $('.ac-input').addClass('focused spanned');
    $('.ui-icon-search').addClass('text-white');
};

function unfocusSearchBar() {
    $('.ui-icon-search').removeClass('text-white');
    $('.ac-input').removeClass('focused spanned');
    $('.ac-input').addClass('spannedout');
    $('.ui-icon-search').addClass('text-slate-300');
    $('#container-input').addClass('hidden');
};

$("#user-menu").hover(function(){
    $('#user-button').addClass('text-white');
}, function() {
    $('#user-button').removeClass('text-white');
});

$("#menu-modal").hover(function(){
    $('#user-button').addClass('text-white');
}, function() {
    $('#user-button').removeClass('text-white');
});

$('#user-menu').click(() => {
    $('#user-dropdown').removeClass('hidden');
    $('#menu-modal').removeClass('hidden');
});

$('#menu-modal').click(() => {
    $('#user-dropdown').addClass('hidden');
    $('#menu-modal').addClass('hidden');
});

$('#notification-icon-container').click(() => {
    $('#notification-dropdown').removeClass('hidden');
    $('#notification-icon').addClass('text-white');
    $('#notification-icon-container').addClass('active-icon');
    $('#menu-notification-modal').removeClass('hidden');
});

$('#menu-notification-modal').click(() => {
    $('#notification-dropdown').addClass('hidden');
    $('#notification-icon').removeClass('text-white');
    $('#menu-notification-modal').addClass('hidden');
    $('#notification-icon-container').removeClass('active-icon');
});

$('#message-icon-container').click(() => {
    $('#message-dropdown').removeClass('hidden');
    $('#message-icon').addClass('text-white');
    $('#message-icon-container').addClass('active-icon');
    $('#menu-message-modal').removeClass('hidden');
});

$('#menu-message-modal').click(() => {
    $('#message-dropdown').addClass('hidden');
    $('#message-icon').removeClass('text-white');
    $('#menu-message-modal').addClass('hidden');
    $('#message-icon-container').removeClass('active-icon');
});

$('.ac-input').on('focus', focusSearchBar);
$('.ac-input').on('focusout', unfocusSearchBar);

$('.ac-input').keyup((e) => {
    // clearInterval(inter);
    containerBlogs.innerHTML = '';
    containerHackers.innerHTML = '';

    const value = e.target.value;
    
    const divBlogs = document.createElement('div');
    divBlogs.setAttribute('class', 'px-5 py-3 text-xs border-b grey-on-hover cursor-pointer');
    divBlogs.innerHTML = value + ' ' + randomString(6);
    containerBlogs.appendChild(divBlogs);

    for (let index = 0; index < 5; index++) {
        inc++;
        const divHackers = document.createElement('div');
        divHackers.setAttribute('class', 'px-5 py-2 text-xs border-b grey-on-hover relative');
    
        const table = document.createElement('table');
        table.setAttribute('class', 'cursor-pointer w-full');
    
        const tr = document.createElement('tr');
    
        const td1 = document.createElement('td');
        td1.setAttribute('class', 'overflow-hidden img-profile');
    
        const td2 = document.createElement('td');
        td2.setAttribute('class', 'pl-2');
        td2.innerHTML = value + randomString();
        
        const img = document.createElement('img');
        img.setAttribute('src', `${api}${inc}0`);
        img.setAttribute('width', '25px');
        img.setAttribute('height', '25px');
    
        divHackers.appendChild(table);
        table.appendChild(tr);
        tr.appendChild(td1);
        td1.appendChild(img);
        tr.appendChild(td2);
    
        containerHackers.appendChild(divHackers);
    }

    if(inc > 30) inc = 4;

    if(value.length == 0) $('#container-input').addClass('hidden');
    else $('#container-input').removeClass('hidden');
}); 

for (let index = 0; index < tooltipData.length; index++) {
    $(`.tooltip-${index}`).hover(function(){
        $(`.tooltip-dropdown-${index}`).removeClass('hidden');
        $(`.desc`).html(tooltipData[index].desc);
        $(`.link`).attr('href', tooltipData[index].link);
    }, function() {
        $(`.tooltip-dropdown-${index}`).addClass('hidden');
    });
};
// const posts = [
//     {title: 'Post One', body:'This is One'},
//     {title: 'Post Two', body:'This is Two'}
// ];

// function getPosts() {
//     setTimeout(() =>{
//         let output = '';
//         posts.forEach((post, index)=>{
//             output+=`<li>${post.title}</li>`;
//         })
//         document.body.innerHTML = output;
//     },1000)
// }

// function createPost(post, callback) {
//     setTimeout(()=>{
//         posts.push(post);
//         callback()
//     },2000)
// }


// createPost({title:'Post Three', body: 'This is post three'
// },getPosts);


            /*PROMISES*/

const posts = [
    {title: 'Post One', body:'This is One'},
    {title: 'Post Two', body:'This is Two'}
];

function getPosts() {
    setTimeout(() =>{
        let output = '';
        posts.forEach((post, index)=>{
            output+=`<li>${post.title}</li>`;
        })
        document.body.innerHTML = output;
    },1000)
}

function createPost(post, callback) {

    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            posts.push(post);

            const error = false;

            if(!error) {
                resolve();
            }else {
                reject('Error: something went wrong');
            }
        },2000);
    });
    
}


// createPost({title:'Post Three', body: 'This is post three'
// },).then(getPosts).catch(err => console.log(err));


// Promise ALL 


// // const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const Promise3 = new Promise((resolve,reject) =>{
//     setTimeout(resolve,2000, 'Goodbye');
// })
// const promise4 = fetch('http://jsonplaceholder.typicode.com/users').then(res => res.json());

// Promise.all([promise1,promise2,Promise3,promise4]).then(values => console.log(values)); 


//Async Await
// async function init() {
//     await createPost ({title: 'Post Three',body:'This is post three'});

//     getPosts();
// }

// init();

/*-------------ASYNC AWAIT FETCH--------------- */

async function fetchUsers() {
    const res = fetch('http://jsonplaceholder.typicode.com/users');

    const data = await (await res).json();

    console.log(data);
}

fetchUsers();
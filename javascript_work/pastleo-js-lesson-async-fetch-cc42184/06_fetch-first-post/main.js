document.addEventListener('DOMContentLoaded', async () => {
//   fetch('http://pastleo-posts-api.herokuapp.com/api/posts')
//     .then(request => request.json()) // function()
//     .then(posts => {
//       console.log(posts)
//       const firstPost = posts[0]
//       const postTitleA = document.querySelector('.post-title')

//       postTitleA.textContent = firstPost.title
//       postTitleA.href = firstPost.urll
      
//       document.querySelector('.post-created-at').textContent = post.create_at
//       document.querySelector('.post-author').textContent = 'By ${post.author}'
//       document.querySelector('.post-description').textContent = firstPost.description

//       const postLinkA = document.querySelector('.post-link')
//       postLinkA.classList.remove('hidden')



    const postsResponse = await fetch('https://pastleo-posts-api.herokuapp.com/api/posts');
    const posts = await postsRespones.json()
    const firstPost = posts[0]
    document.querySelector('.post-created-at').textContent = post.create_at
    document.querySelector('.post-author').textContent = 'By ${post.author}'
    const postTitleA = document.querySelector('a.post-title');
    postTitleA.textContent = post.title;
    postTitleA.href = post.url;

    descriptionDiv.textContent = post.description;

    const fullPostResponse = await fetch(post.api_url);
    const fullPost = await fullPostResponse.json();

    document.querySelector('.post-content').textContent = fullPost.textContent
    descriptionDiv.classList.add('hidden');
})
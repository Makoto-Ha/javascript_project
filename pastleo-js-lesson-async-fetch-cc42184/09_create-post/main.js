document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('create-post-form');
  const submitBtn = form.querySelector('button[type=submit]');

  form.addEventListener('submit', async event => {
    event.preventDefault();

  form.querySelectorAll('.error').forEach(errorSpan => {
    errorSpan.textContent = ''
  })
  submitBtn.classList.add('loading')
  submitBtn.disabled('')

    const response = await fetch('https://pastleo-posts-api.herokuapp.com/api/posts', {
      method: 'POST',
      headers: {
        Authorization: 'pastleo-js-posts-api-secret'
      },
      body: new FormData(form)
    })

    if(response.ok) {
      submitBtn.textContent = 'Success!'
    }else {
      submitBtn.textContent = 'Error!'

      const errors = await response.json()
      form.querySelectorAll('label').forEach(
        label => {
          const error = error[label.htmlFor];
          if(error) {
            label.querySelector('.error').textContent = error.join(', ')
          }
        })
      console.log(errors)
    }

    submitBtn.classList.remove('loading')
  });
})  

/* eslint-disable no-undef */
$(document).ready(function () {
  const form = document.getElementById('podcastForm')
  let cookie

  function getCookie (cname) {
    var name = cname + '='
    var decodedCookie = decodeURIComponent(document.cookie)
    var ca = decodedCookie.split(';')
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i]
      while (c.charAt(0) === ' ') {
        c = c.substring(1)
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length)
      }
    }
    return ''
  }

  form.addEventListener('submit', function (e) {
    var fields = $('#podcastForm').serializeArray()
    cookie = getCookie('hubspotutk')
    var data = {
      submittedAt: Date.now(),
      fields,
      context: {
        hutk: cookie,
        pageUri: 'https://www.cloudtask.com/podcast',
        pageName: 'Podcast'
      }
    }

    if (this.checkValidity() === false) {
      return false
    }

    e.preventDefault()
    formSubmit(data)
  })

  function formSubmit (data) {
    // Create the new request
    let xhr = new XMLHttpRequest()
    let url =
      'https://api.hsforms.com/submissions/v3/integration/submit/1709048/058a7f72-d7c0-4511-b357-70bcf8cbaa3d'
    xhr.open('POST', url)
    // Sets the value of the 'Content-Type' HTTP request headers to 'application/json'
    xhr.setRequestHeader('Content-type', 'application/json')
    let finalData = JSON.stringify(data)

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText) // Returns a 200 response if the submission is successful.
        window.location.href =
          'https://www.cloudtask.com/social-lead-generation-thank-you-page-ms'
      } else if (xhr.readyState === 4 && xhr.status === 400) {
        console.log(xhr.responseText) // Returns a 400 error the submission is rejected.
      } else if (xhr.readyState === 4 && xhr.status === 403) {
        console.log(xhr.responseText) // Returns a 403 error if the portal isn't allowed to post submissions.
      } else if (xhr.readyState === 4 && xhr.status === 404) {
        console.log(xhr.responseText) // Returns a 404 error if the formGuid isn't found
      }
    }

    // Sends the request

    xhr.send(finalData)
  }
})

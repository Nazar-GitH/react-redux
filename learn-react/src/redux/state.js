let state = {
    profilePage : {
        posts : [
            {id: 1, message: "Lime", likesCount: 24},
            {id: 2, message: "Cherry", likesCount: 16},
            {id: 3, message: "Mango", likesCount: 42}
          ]
    },

    dialogsPage : {
        dialogs : [
            {id: 1, name: 'John'},
            {id: 2, name: 'Paul'},
            {id: 3, name: 'James'},
            {id: 4, name: 'Anderson'}
          ],
          
          messages : [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How your new tastes pepsi?'},
            {id: 3, message: 'It is so good!'}
          ]
    }
           
}

export let addPost = (postMessage) => {
  debugger;
      let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
      }

      state.profilePage.posts.push(newPost)
}

export default state
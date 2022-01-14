import { rerenderEntireTree } from "../render";

let state = {
    profilePage : {
        posts : [
            {id: 1, message: "Lime", likesCount: 24},
            {id: 2, message: "Cherry", likesCount: 16},
            {id: 3, message: "Mango", likesCount: 42}
          ],
          newPostText: 'react-js'
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
export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  };

state.profilePage.posts.push(newPost)
state.profilePage.newPostText = '';
rerenderEntireTree(state)
}

export let updateNewPostText = (newText) => {  
state.profilePage.newPostText = newText
rerenderEntireTree(state)
}

export default state
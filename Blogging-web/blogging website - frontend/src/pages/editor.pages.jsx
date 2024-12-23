import React, { useContext, useState } from 'react'
import { Navigate } from 'react-router-dom'
import BlogEditor from '../components/blog-editor.component'
import PublishForm from '../components/publish-form.component'
import { UserContext } from '../App'

const Editor = () => {

   const [editorState, setEditorState] = useState("editor") 
   let {userAuth: {access_token}} = useContext(UserContext)  

  return (
    
      access_token === null ? <Navigate to="/signin"/>
      : editorState == "editor" ? <BlogEditor/> : <PublishForm/>
    
  )
}

export default Editor

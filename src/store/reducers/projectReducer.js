const initState = {
  projects: [
    {id: 1, title:'find Peach', content: 'blah blah test'},
    {id: 2, title:'Race on shells', content: 'blah blah test'},
    {id: 3, title:'Defeat bowser', content: 'blah blah test'}
  ]
}
const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':  
      console.log('created project', action.project)
  }
  return state
}

export default projectReducer
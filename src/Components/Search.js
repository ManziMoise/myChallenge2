import { useState } from 'react'
// import Button from './Components/Button'

const SearchAlbum = ({ onSearch }) => {

        const[text, setText] = useState('')
      
       
const onSubmit = (e) => {

    e.preventDefault()

    if(!text){
        alert('please enter an id')
        return
    }

    onSearch({text})


    setText('')
   

}

    return (
        <form className='search-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>ID</label>
                <input type='text' 
                placeholder='enter an id' 
                value={text} 
                onChange={(e) => 
                setText(e.target.value)}></input>


            </div>
            
            <input type='submit' value= 'Search Album' className='btn btn-block' />
        </form>
    )
}

export default SearchAlbum

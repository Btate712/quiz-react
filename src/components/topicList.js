import React from 'react';

function TopicList(props) {
  const topics = props.topics.sort((a, b) => a.name > b.name ? 1 : -1 );    

  return (
    topics.map((topic, key) => {
      return (
        <div key={key}>
          <label className="form-check-label">
            <input 
              className="" 
              type="checkbox" 
              id={topic.id} 
              name={topic.name} 
              checked={props.isChecked(topic.id)} 
              onChange={props.handleInputChange} 
            />
            {topic.name}
          </label>
        </div>
      )
    })
  )
}

export default TopicList;
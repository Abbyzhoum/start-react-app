import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';

class TodoApp extends React.Component {
  constructor(props){
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render (){
    return (
      <div>
        <h3>TodoList</h3>
        <TodoList  items={this.state.items}/>
        <form onSubmit={this.handleSubmit} />
          <label htmlFor="new-todo">
              what need to done?
          </label>
          <input id="new-todo" 
                onChange={this.handleChange}
                value={this.state.text}>
          </input>
          <button>
            Add #{this.state.items.length + 1}
          </button>
     </div>
    )
  }

  handleChange(e){
    this.setState({ text: e.target.value });
  }
  handleSubmit(e){
    e.preventDefault();
    if(this.state.text.length === 0){
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    }
    this.setState(state =>({
      items: state.items.contact(newItem),
      text: ''
    }))
  }
} 

class TodoList extends React.component {
  render() {
    return (
      <ul>
      { this.props.item.map((item) => (
        <li key={item.id}>{item.text}</li>
        )) }
      </ul>
    )
  }
}

ReactDOM.render(
  <TodoApp />,
  document.getElementById('App')
)

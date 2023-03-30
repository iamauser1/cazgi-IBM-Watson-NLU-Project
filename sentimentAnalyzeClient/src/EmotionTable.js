import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {
    render() {
      return (  
        <div>
          <table className="table table-bordered">
            <tbody>
            {
                    Object.entries(this.props.emotions).map(function(v) {
                        return (
                            <tr>
                                <td>{v[0]}</td>
                                <td>{v[1]}</td>
                            </tr>
                        )
                        })
            }
            </tbody>
          </table>
          </div>
          );
        }
    
}
export default EmotionTable;
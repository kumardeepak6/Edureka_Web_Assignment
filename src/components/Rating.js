import ReactStars from "react-rating-stars-component";
import React from "react";
import { render } from "react-dom";
 
const ratingChanged = (newRating) => {
  console.log(newRating);
};
 
render(
  <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
  />,
 
  document.getElementById("root")
);


/* import React, {Component} from 'react'
import StarRatings from 'react-star-ratings';
 
class Rating extends Component {
    changeRating( newRating, name ) {
      this.setState({
        rating: newRating
      });
    }
 
    render() {
      // rating = 2;
      return (
        <StarRatings
          rating={this.state.rating}
          starRatedColor="blue"
          changeRating={this.changeRating}
          numberOfStars={6}
          name='rating'
        />
      );
    }
}

export default Rating;
 */


/* import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const Rating = () => {

    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return <div>
        {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            return <label>
                <input type="radio" name="rating" style={{display:"none"}} value={ratingValue} onClick={() => setRating(ratingValue)}/>
                <FaStar 
                    size={25} 
                    style={{cursor:"pointer", transition:"color 200ms"}} 
                    color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseOut={() => setHover(null)}
                />
            </label>
        })}
        
    </div>
}

export default Rating; */
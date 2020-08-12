import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { connect } from 'react-redux'

const AdditionalFeatures = props => {
  const selectedFeatures = props.additionalFeatures.filter(features => features.name === props.car)
  console.log(selectedFeatures)
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} car={props.car} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {

  return {
    additionalFeatures: state.additionalFeatures,
  }
}

export default connect(mapStateToProps, {} )(AdditionalFeatures);

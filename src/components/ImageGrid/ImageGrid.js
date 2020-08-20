import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles.css';
import { loadImages } from '../../actions/index';
import Button from '../Button/index';
const key = '5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';

class ImageGrid extends Component {
    // componentDidMount() {
    //     fetch(`https://api.unsplash.com/photos/?client_id=${key}&per_page=28`)
    //         .then(res => res.json())
    //         .then(images => {
    //             this.setState({
    //                 images,
    //             });
    //         });
    // }

    render() {
        const { images, error, isLoading, loadImages } = this.props;
        return (
            <div className="content">
                <section className="grid">
                    {images.map(image => (
                        <div
                            key={image.id}
                            className={`item item-${Math.ceil(
                                image.height / image.width,
                            )}`}
                        >
                            <img
                                src={image.urls.small}
                                alt={image.user.username}
                            />
                        </div>
                    ))}

                    {/* <a onClick={this.props.loadImages}>LOAD</a> */}
                </section>
                {error && <div className="error">{JSON.stringify(error)}</div>}

                <Button
                    onClick={() => !isLoading && loadImages()}
                    loading={isLoading}
                >
                    Click Me
                </Button>
            </div>
        );
    }
}
const mapStateToProps = ({ isLoading, images, error }) => ({
    isLoading,
    images,
    error,
});

const mapDispatchToProps = dispatch => ({
    loadImages: () => dispatch(loadImages()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ImageGrid);

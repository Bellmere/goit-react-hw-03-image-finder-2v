import { Component } from "react";
import { fetchImages } from "components/Api/Api";
import { Loader } from "components/Loader/Loader";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { Btn } from "components/Button/Button";
import css from '../ImageGallery/ImageGallery.module.css';

export class ImageGallery extends Component {
    state = {
        inputSearch: '',
        error: null,
        status: 'idle',
        images: [],
        pageNr: 1,
    };

    componentDidUpdate(prevProps, prevState) {
        const {pageNr, inputSearch} = this.state;
        const prevSearch = prevProps.inputSearch;
        const currentSearch = this.props.inputSearch;

        if (prevSearch !== currentSearch) {
            this.setState({status: 'pending', inputSearch: currentSearch});

            fetchImages(currentSearch, 1)
            .then(images => this.setState({images, status: 'resolved'}))
            .catch(error => this.setState({error, status: 'rejected'}));
        }
    };

    onClickMore = async () => {
        const {inputSearch, pageNr, images} = this.state;
        const response = await fetchImages(inputSearch, pageNr + 1,)
        this.setState({
          images: [...images, ...response],
          pageNr: pageNr + 1,
        });
      };

    render() {
        const {images, error, status} = this.state;

        if (status === 'idle') {
            return <div>Search images and photos</div>
        }

        if (status === 'pending') {
            return <Loader />
        }

        if (status === 'rejected') {
            return <p>{error}</p>
        }

        if (status === 'resolved') {
            return (
                <div className={css.wrapper}>
                    <ul className={css.imageGallery}>
                {images.map((image, index) => (
                <ImageGalleryItem image={image} key={index} />
                ))}
                </ul>
                {images.length > 0 ? (
                <Btn 
                onClick={this.onClickMore}
                />
                ) : (<p>No images found</p>)}
                </div>
            );
        }

    };
}
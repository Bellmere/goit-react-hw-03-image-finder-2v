import { Component } from "react";
import css from '../Searchbar/Searchbar.module.css';
import { HiMagnifyingGlass } from "react-icons/hi2";

export class Searchbar extends Component {
    state = {
        inputSearch : '',
    };
    

    handleChange = e => {
        this.setState({ inputSearch: e.target.value.toLowerCase() });
    };

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.inputSearch.trim() === '') {
            alert('Write correct word');
            return;
        } else {
            this.props.onSubmit(this.state.inputSearch);
        }

        this.reset();
        e.target.value = '';
        console.log(this.state.inputSearch);
    }

    reset = () => {
        this.setState( {inputSearch: ''} );
    };

    render() {
        return (
            <header className={css.searchbar}>
                <form onSubmit={this.handleSubmit} className={css.searchbar__form}>
                    <button type="submit" className={css.searchbar__btn}>
                    <span className={css.searchbar__btn__icon}>
                        <HiMagnifyingGlass />
                    </span>
                    </button>

                    <input
                    className={css.searchbar__input}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    onChange={this.handleChange}
                    />
                </form>
            </header>
        );
    };
};
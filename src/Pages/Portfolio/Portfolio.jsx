import React, { Component } from "react";
import { ReactDOM } from "react";
import "./Portfolio.css";
import { userNavigate } from "react-router-dom";
import useProjects from "../../Hooks/useProjects";


const imgs = [
  {
    author: "The Lazy Artist Gallery",
    tag: "People",
    src: "https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/1.jpg?raw=true",
  },
  {
    author: "Daria Shevtsova",
    tag: "Food",
    src: "https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/2.jpg?raw=true",
  },
  {
    author: "Kasuma",
    tag: "Animals",
    src: "https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/3.jpg?raw=true",
  },
  {
    author: "Dominika Roseclay",
    tag: "Plants",
    src: "https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/4.jpg?raw=true",
  },
  {
    author: "Scott Webb",
    tag: "Plants",
    src: "https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/5.jpg?raw=true",
  },
  {
    author: "Jeffrey Czum",
    tag: "People",
    src: "https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/6.jpg?raw=true",
  },
  {
    author: "Dominika Roseclay",
    tag: "Food",
    src: "https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/7.jpg?raw=true",
  },
  {
    author: "Valeria Boltneva",
    tag: "Animals",
    src: "https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/8.jpg?raw=true",
  },
];



const filters = [
  { name: "People", status: false },
  { name: "Animals", status: false },
  { name: "Plants", status: false },
  { name: "Food", status: false },
];



const Filters = ({ onClickAll, all, onClick, filters }) => (
  <form className="menu-form">
    <ul>
      <li onClick={onClickAll}>
        <input type="checkbox" defaultChecked={all} />
        <label htmlFor="all">All</label>
      </li>
      {filters.map((filter, i) => (
        <li key={i} data-index={i} onClick={onClick}>
          <input
            id={filter.name}
            type="checkbox"
            defaultChecked={filter.status}
          />
          <label htmlFor={filter.name}>{filter.name}</label>
        </li>
      ))}
    </ul>
  </form>
);

const Cards = ({ imgs }) => {
  return (
    <>
      {imgs.map((img, i) => (
        <div key={i} className="card w-full bg-accent shadow">
          <figure className="rounded-lg">
            <img className="" src={img.src} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{img.author}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

class Portfolio extends Component {
  state = {
    imgs,
    filters,
    all: true,
  };

  setFilter = (e) => {
    e.preventDefault();
    const { filters, all } = this.state;
    const { index } = e.currentTarget.dataset;

    filters[index].status = !filters[index].status;
    this.setState({
      filters,
    });

    this.updateFilters();
    this.updateImgs();
  };

  setAll = () => {
    const { filters } = this.state;

    filters.forEach((filter) => {
      filter.status = false;
    });

    this.setState({
      all: true,
      filters,
    });
  };

  updateFilters() {
    const allFiltersTrue = filters.every((filter) => filter.status === true);
    const allFiltersFalse = filters.every((filter) => filter.status === false);

    if (allFiltersTrue || allFiltersFalse) {
      this.setAll();
    } else {
      this.setState({
        all: false,
      });
    }
  }

  updateImgs() {
    const { filters, all } = this.state;
    let newImgs = [];
    let a = 0;

    imgs.forEach((img, imgKey) => {
      filters.forEach((filter, filterKey) => {
        if (img.tag == filter.name && filter.status == true) {
          newImgs[a] = img;
          a++;
        }
      });
    });

    this.setState({
      imgs: newImgs,
    });
  }

  render() {
    const { filters, all } = this.state;
    return (
      <div id="portfolio">
        <div className="container mx-auto px-4">
          <h2 className="text-center py-6 text-2xl font-semibold pb-0">
            Project Show case
          </h2>
        </div>
        <Filters
          onClickAll={this.setAll}
          all={all}
          onClick={this.setFilter}
          filters={filters}
        />

        {all ? (
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-4">
              <Cards imgs={imgs} />
            </div>
          </div>
        ) : (
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-4">
              <Cards imgs={this.state.imgs} />
            </div>
          </div>
        )}
      </div>
    );
  }
}
// ReactDOM.render(<App/>, document.getElementById('root'));

export default Portfolio;

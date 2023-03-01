import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row gx-lg-5 text-center'>
          <div className="col-lg-3 col-md-6 col-12 mb-3 " >
            <div className="card-body p-0 bg-light">
              <img src='./img/black-car.jpg' className='card-img-top' alt='img 1'></img>
              <div className='px-2'>
                <h5 className="card-title py-3">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
              <div className='box_bottom border-top mt-3 py-3'>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-3 " >
            <div className="card-body p-0 bg-light">
              <img src='./img/red-car.jpg' className='card-img-top' alt='img 2'></img>
              <div className='px-2'>
                <h5 className="card-title py-3">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
              <div className='box_bottom border-top mt-3 py-3'>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-3" >
            <div className="card-body p-0 bg-light">
              <img src='./img/silver-car.jpg' className='card-img-top' alt='img 3'></img>
              <div className='px-2'>
                <h5 className="card-title py-3">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
              <div className='box_bottom border-top mt-3 py-3'>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-3" >
            <div className="card-body p-0 bg-light">
              <img src='./img/steel-car.jpg' className='card-img-top' alt='img 4'></img>
              <div className='px-2'>
                <h5 className="card-title py-3 ">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
              <div className='box_bottom border-top mt-3 py-3'>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

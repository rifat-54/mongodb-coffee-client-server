import React from "react";
import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleSubmit=(e)=>{
        e.preventDefault()
        const form=e.target;
        const name=form.name.value;
        const quantity=form.quantity.value;
        const taste=form.taste.value;
        const supplier=form.supplier.value;
        const category=form.category.value;
        const details=form.details.value;
        const photo=form.photo.value;

        const newCoffee={name,quantity,taste,supplier,category,details,photo}
        
        fetch('http://localhost:5000/coffee',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Succesfully added a new coffee',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    
  return (
    <div className="p-14 bg-slate-100">
        <h2 className="text-3xl  font-bold text-center mb-14">Add a Coffee</h2>
      <form onSubmit={handleSubmit}>
        {/* from row name and quntity */}
          <div className="md:flex">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Coffee Name</span>
              </label>
              <label className="input-group">
                
                <input
                name="name"
                  type="text"
                  placeholder="coffee name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control ml-8 md:w-1/2">
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <label className="input-group">
                
                <input
                name="quantity"
                  type="text"
                  placeholder="available quantity"
                  className="input input-bordered w-full "
                />
              </label>
            </div>
          </div>
        {/* from row supplier and taste*/}
          <div className="md:flex">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Supplier</span>
              </label>
              <label className="input-group">
                
                <input
                name="supplier"
                  type="text"
                  placeholder="supplier"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control ml-8 md:w-1/2">
              <label className="label">
                <span className="label-text">Taste</span>
              </label>
              <label className="input-group">
                
                <input
                name="taste"
                  type="text"
                  placeholder="taste"
                  className="input input-bordered w-full "
                />
              </label>
            </div>
          </div>
        {/* from row category and detials */}
          <div className="md:flex">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <label className="input-group">
                
                <input
                name="category"
                  type="text"
                  placeholder="category"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control ml-8 md:w-1/2">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <label className="input-group">
                
                <input
                name="details"
                  type="text"
                  placeholder="Details"
                  className="input input-bordered w-full "
                />
              </label>
            </div>
          </div>
        {/* from row photo*/}
          <div className="">
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <label className="input-group">
                
                <input
                name="photo"
                  type="text"
                  placeholder="photo"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            
          </div>
          <input type="submit" value="Add Coffee" className="btn block w-full btn-neutral my-10" />
        
      </form>
    </div>
  );
};

export default AddCoffee;

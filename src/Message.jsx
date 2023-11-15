function Ooo({title,price,user,store,project,access,priproj,support,subdomain,status}){
    return <>
        <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">{title}</h5>
            <h6 class="card-price text-center">{price}<span class="period">/month</span></h6>
            <hr/>
            <ul class="fa-ul">
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{user}</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{store}</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{project}</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{access}</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{priproj}</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{support}</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{subdomain}</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{status}</li>
            </ul>
            <div class="d-grid">
              <button to="#" class="btn btn-primary text-uppercase">Button</button>
            </div>
          </div>
        </div>
      </div>
    </>
}

export default Ooo;
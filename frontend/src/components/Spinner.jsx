function Spinner() {
  return (
    <div class="container-fluid position-fixed top-0 start-0 bottom-0 end-0 d-flex justify-content-center align-items-center bg-dark" style="--bs-bg-opacity: .5;">
       <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
       </div>
    </div>
  )
}

export default Spinner
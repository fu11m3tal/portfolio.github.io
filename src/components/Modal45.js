<Button
        onClick={toggle4}
        variant="outlined"
        color="primary"
        className="m-2">
        Open example IV
      </Button>
      <Dialog scroll="body" maxWidth="md" open={modal4} onClose={toggle4}>
        <Grid container spacing={0}>
          <Grid item xs={12} lg={5}>
            <img alt="..." className=" img-fit-container" src={stock1} />
          </Grid>
          <Grid item xs={12} lg={7}>
            <div className="bg-white ">
              <div className="p-5">
                <img
                  alt="..."
                  className="w-25 d-block img-fluid"
                  src={svgImage1}
                />
                <h1 className="display-4 my-3 font-weight-bold">
                  Wonderful serenity has possession
                </h1>
                <p className="font-size-lg text-black">
                  A free hour, when our power of choice is untrammelled and when
                  nothing prevents.
                </p>
                <p className="font-size-sm mb-3 text-black-50">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics
                </p>
                <Button color="primary" variant="contained">
                  Continue reading
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </Dialog>

      <Button
        onClick={toggle5}
        variant="outlined"
        color="primary"
        className="m-2">
        Open example V
      </Button>
      <Dialog scroll="body" maxWidth="md" open={modal5} onClose={toggle5}>
        <div className="p-4">
          <Grid container spacing={4}>
            <Grid item lg={4}>
              <a
                href="#/"
                onClick={e => e.preventDefault()}
                className="card-img-wrapper rounded">
                <div className="img-wrapper-overlay">
                  <div className="overlay-btn-wrapper">
                    <Button color="primary" className="p-0 d-50 rounded-circle">
                      <span className="btn-wrapper--icon">
                        <FontAwesomeIcon icon={['fas', 'play-circle']} />
                      </span>
                    </Button>
                  </div>
                </div>
                <div className="card-badges card-badgestop">
                  <Badge color="secondary">New</Badge>
                </div>
                <img alt="..." className="card-img-top rounded" src={people2} />
              </a>
            </Grid>
            <Grid item lg={8}>
              <a
                href="#/"
                onClick={e => e.preventDefault()}
                className="font-size-xxl d-block my-4">
                New report file has been uploaded
              </a>
              <p className="text-black-50 font-size-lg mb-0">
                Lorem ipsum dolor sit amet,consectetuer edipiscing elit,sed diam
                nonummy nibh euismod tinciduntut laoreet doloremagna aliquam
                erat volutpat.
              </p>

              <div className="d-flex align-items-center mt-4">
                <div className="avatar-icon-wrapper avatar-icon-lg  mr-2">
                  <div className="avatar-icon">
                    <img alt="..." src={avatar3} />
                  </div>
                </div>
                <div>
                  <a
                    href="#/"
                    onClick={e => e.preventDefault()}
                    className="font-weight-bold text-black"
                    title="...">
                    Aaran Mitchell
                  </a>
                  <span className="text-black-50 d-block">
                    UI Engineer, Google
                  </span>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </Dialog>
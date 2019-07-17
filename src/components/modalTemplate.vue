<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
        <div class="modal-BG" @click="close">
            </div>
      <div class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="modal-header"
          id="modalTitle"
        >
          <slot name="header">
            <!-- <h2>You are leaving the DMID-CROMS website.</h2> -->
            <h2> Document Title </h2>
            <button
              type="button"
              class="btn-close"
              @click="close"
              aria-label="Close modal"
            >
              X
            </button>
          </slot>
        </header>
        <section
          class="modal-body"
          id="modalDescription"
        >
          <slot name="body">
            <!-- <p>This external Link provides additional information that is consistent with the intended purpose of this site. NIH cannot attest to the accuracy of a non-federal site.</p>
            <br/>
            <p>Linking to a non-federal site does not constitute an endorsement by DMID-CROMS IT Systems or any of its employees of the sponsors or the information and products presented on the site. You will be subject to the destination site's privacy policy when you follow the link.</p> -->
            <div class="form-Row">
                  <p class="form-text">Comments:</p>
                  <div class="form-Final">
                  <!-- <textarea class="form-input" rows="6" cols="80" name="comment" form="usrform" placeholder="(Character limit = 5000)"> -->
                  <textarea class="form-input" rows="6" cols="80" name="comment" form="usrform" placeholder="(Character limit = 5000)">
                  </textarea>

                </div>
                </div>
          </slot>
        </section>
        <footer class="modal-footer">
          <slot name="footer">
              <button
              type="button"
              class="btn-closeFoot"
              @click="close"
              aria-label="Close modal"
            >
              Edit
            </button>

              <!-- Change @click and Aria-Label in actual production -->
            <button
              type="button"
              class="btn-continue"
              @click="close"
              aria-label="Close modal"
            >
              <!-- Continue to site --> Save
            </button>

            <button
              type="button"
              class="btn-closeFoot"
              @click="close"
              aria-label="Close modal"
            >
              <!-- Close --> Cancel
            </button>

          </slot>
        </footer>
      </div>

    </div>
  </transition>
</template>

<script>
export default {
  name: 'modal',
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
  .modal-BG {
      background-color: rgba(68,91,156,0.2);
      height: 100vh;
      width: 100vw;
      position: absolute;
  }
  .modal {
    width: 650px;
    background: #FFFFFF;
    box-shadow: 0px 0px 20px 1px rgba(0,0,0,0.5);
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    position: relative;
    top: -20%;
    border-radius: 4px;
    font-family: Calibri;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    border-bottom: 1px solid #eeeeee;
    color: white;
    /* background-color: #445b9c; */
    background-color: #728776;
    font-weight: bold;
    justify-content: flex-start;

  }
  .modal-header h2 {
      margin: 0;
      font-size: 18px;
      font-weight: bold;
      width: calc(100% - 28px);
      line-height: 28px;
      vertical-align: middle;
  }

  .btn-close {

    border: 1px solid white;
    font-size: 18px;
    width: 28px;
    border-radius: 50%;
    cursor: pointer;
    font-weight: bold;
    color: white;
    background: transparent;
    line-height: 26px;
    vertical-align: top;
  }

  .modal-body {
    position: relative;
    padding: 20px 15px;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
  }

  /* Footer Buttons. Hidden spaces the buttons to be at the edges but keeps btn-continue in the center*/
  .btn-hidden {
    color: black;
    background: #ccc;
    border: 1px solid #666;
    border-radius: 2px;
    padding: 0 5px;
    visibility: hidden;

  }
  .btn-continue {
    color: white;
    /* background: #445b9c;
    border: 1px solid #445b9c; */
    background: #728776;
    border: 1px solid #728776;
    border-radius: 2px;
    /* padding: 0 5px; */
    padding: 5px 10px;
    margin: auto;
  }
  .btn-closeFoot {
    color: black;
    background: #ccc;
    border: 1px solid #666;
    border-radius: 2px;
    padding: 0 5px;
  }
  .gray {
  background-color: #ccc;
}
</style>

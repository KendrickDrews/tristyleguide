<template>
  <div>
            <button class="excel-Btn"> Export to Excel </button>
            <!-- to implement:: Fixed header, Correct ScrollBar Styling,  -->
            <!-- <table>
                <tr>
                  <th><div class="tableHeader long" >Name </div></th>
                  <th><div class="tableHeader short">Created </div></th>
                  <th><div class="tableHeader short">Requestor Name </div></th>
                  <th><div class="tableHeader short">Requestor Email </div></th>
                  <th><div class="tableHeader short">Requestor Phone </div></th>
                  <th><div class="tableHeader short">Site Name </div></th>
                  <th><div class="tableHeader short">Principal Investigator </div></th>
                  <th><div class="tableHeader long">DMID Protocol No </div></th>
                  <th><div class="tableHeader long">DMID Protocol No Not Known </div></th>
                  <th><div class="tableHeader short">Training Course </div></th>
                  <th><div class="tableHeader short">Training Materials Info </div></th>
                  <th><div class="tableHeader short">Approval Status </div></th>
                </tr>
                </table> -->
                <img src="../../../imgs/Table_IMG.png"/>
            <!-- <div id="scrollTable" >

              <table>
                <thead>
                <tr>
                  <th><div class="tableHeader long" >Name </div></th>
                  <th><div class="tableHeader short">Created </div></th>
                  <th><div class="tableHeader short">Requestor Name </div></th>
                  <th><div class="tableHeader short">Requestor Phone </div></th>
                  <th><div class="tableHeader short">Requestor Email </div></th>

                  <th><div class="tableHeader short">Site Name </div></th>
                  <th><div class="tableHeader short">Principal Investigator </div></th>
                  <th><div class="tableHeader long">DMID Protocol No </div></th>
                  <th><div class="tableHeader long">DMID Protocol No Not Known </div></th>
                  <th><div class="tableHeader short">Training Course </div></th>
                  <th><div class="tableHeader short">Training Materials Info </div></th>
                  <th><div class="tableHeader short">Approval Status </div></th>
                </tr>
                </thead>
                <tbody >
                <tr>
                  <td><a>Training -2018-07-18T12_41_14 </a> </td>
                  <td>18-Jul-2018</td>
                  <td>	Anna Example</td>
                  <td>555801936</td>
                  <td>aexample@altasciences.com	</td>
                  <td>Alta Clinical Research, L.L.C.</td>
                  <td>	DR.KAMKAN</td>
                  <td> </td>
                  <td>True</td>
                  <td>	DMID Source Documentation Standards</td>
                  <td> </td>
                  <td>	Email Started</td>
                </tr>
                <tr>
                  <td><a>Training -2018-07-18T12_41_14 </a></td>
                  <td>18-Jul-2018</td>
                  <td>	Anna Example</td>
                  <td>555801936</td>
                  <td>aexample@altasciences.com	</td>
                  <td>Alta Clinical Research, L.L.C.</td>
                  <td>	DR.KAMKAN</td>
                  <td> </td>
                  <td>True</td>
                  <td>	DMID Source Documentation Standards</td>
                  <td> </td>
                  <td>	Email Started</td>
                </tr>
                <tr>
                  <td><a>Training -2018-07-18T12_41_14 </a></td>
                  <td>18-Jul-2018</td>
                  <td>	Anna Example</td>
                  <td>555801936</td>
                  <td>aexample@altasciences.com	</td>
                  <td>Alta Clinical Research, L.L.C.</td>
                  <td>	DR.KAMKAN</td>
                  <td> </td>
                  <td>True</td>
                  <td>	DMID Source Documentation Standards</td>
                  <td> </td>
                  <td>	Email Started</td>
                </tr>
                <tr>
                  <td><a>Training -2018-07-18T12_41_14 </a></td>
                  <td>18-Jul-2018</td>
                  <td>	Anna Example</td>
                  <td>555801936</td>
                  <td>aexample@altasciences.com	</td>
                  <td>Alta Clinical Research, L.L.C.</td>
                  <td>	DR.KAMKAN</td>
                  <td> </td>
                  <td>True</td>
                  <td>	DMID Source Documentation Standards</td>
                  <td> </td>
                  <td>	Email Started</td>
                </tr>
                <tr>
                  <td><a>Training -2018-07-18T12_41_14 </a></td>
                  <td>18-Jul-2018</td>
                  <td>	Anna Example</td>
                  <td>555801936</td>
                  <td>aexample@altasciences.com	</td>
                  <td>Alta Clinical Research, L.L.C.</td>
                  <td>	DR.KAMKAN</td>
                  <td> </td>
                  <td>True</td>
                  <td>	DMID Source Documentation Standards</td>
                  <td> </td>
                  <td>	Email Started</td>
                </tr>
                <tr>
                  <td><a>Training -2018-07-18T12_41_14 </a></td>
                  <td>18-Jul-2018</td>
                  <td>	Anna Example</td>
                  <td>555801936</td>
                  <td>aexample@altasciences.com	</td>
                  <td>Louisiana State University Health Sciences Center - Infectious Diseases</td>
                  <td>	DR.KAMKAN</td>
                  <td> </td>
                  <td>True</td>
                  <td>	DMID Source Documentation Standards</td>
                  <td> </td>
                  <td>	Email Started</td>
                </tr>
                <tr>
                  <td><a>Training -2018-07-18T12_41_14 </a></td>
                  <td>18-Jul-2018</td>
                  <td>	Anna Example</td>
                  <td>555801936</td>
                  <td>aexample@altasciences.com	</td>
                  <td>Alta Clinical Research, L.L.C.</td>
                  <td>	DR.KAMKAN</td>
                  <td> </td>
                  <td>True</td>
                  <td>	DMID Source Documentation Standards</td>
                  <td> We are requesting training for Emory's IRB DM-16-0017, we will need investigator responsibilities, regulatory file documents, source document standards, study protocol management. Please provide so that I can comply with their IRB requests. Thank you!</td>
                  <td>	Email Started</td>
                </tr>
                <tr>
                  <td><a>Training -2018-07-18T12_41_14 </a></td>
                  <td>18-Jul-2018</td>
                  <td>	Anna Example</td>
                  <td>555801936</td>
                  <td>aexample@altasciences.com	</td>
                  <td>Alta Clinical Research, L.L.C.</td>
                  <td>	DR.KAMKAN</td>
                  <td> </td>
                  <td>True</td>
                  <td>	DMID Source Documentation Standards</td>
                  <td> </td>
                  <td>	Email Started</td>
                </tr>
                </tbody>
              </table>

            </div>
             <div class="pagination">
                <a href="#">&laquo;</a>
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
                <a href="#">6</a>
                <a href="#">&raquo;</a>
              </div> -->

  </div>
</template>

<script>

export default {
  name: 'TrainingReport',
  components: {

  },
  data () {
    return {

    }
  },
  /// ////
  computed: {
    stateTitle: {
      get: function () {
        return this.$root.store.state.siteTitle
      },
      set: function (value) {
        this.$root.store.commit('isSiteTitle', value)
      }
    }
  },
  /// ////
  mounted: function () {
    this.$nextTick(function () {
      this.stateActiveTitle('Training-Report')
    })
  },
  /// ////
  methods: {
    stateActiveTitle (value) {
      return this.stateTitle = value
    },
    showModal () {
      this.isModalVisible = true
    },
    closeModal () {
      this.isModalVisible = false
    }

  }
}

</script>
<style>

</style>

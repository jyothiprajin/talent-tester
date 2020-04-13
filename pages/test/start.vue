<template>
  <v-row align="center" justify="center">
    <v-stepper v-model="currentStep" vertical>
      <template v-for="(instruction, index) in instructions">
        <v-stepper-step
          :key="`stepper` + index"
          :complete="currentStep > index + 1"
          :step="index + 1"
        >
          {{ instruction.title }}
          <small>{{ instruction.subTitle }}</small>
        </v-stepper-step>

        <v-stepper-content :key="index" :step="index + 1">
          <v-card color="lighten-1" class="mb-12" height="200px">
            {{ instruction.description }}
          </v-card>
          <v-btn color="primary" :loading="selectionDialog" @click="nextStep"
            >Next</v-btn
          >
          <v-btn text @click="back">Back</v-btn>
        </v-stepper-content>
      </template>
    </v-stepper>
    <v-dialog v-model="selectionDialog" max-width="800">
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="selectionDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Start to Code or MCQ?</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-container fluid>
          <v-row justify="center" align="center">
            <v-col class="text-center">
              <p>I would like answer MCQ first.</p>
              <v-btn
                :loading="confirmDialog"
                color="primary"
                fab
                x-large
                @click="startMCQ()"
              >
                <v-icon dark x-large>mdi-format-list-checks</v-icon>
              </v-btn>
            </v-col>
            <v-col class="text-center">
              <p>I would like to code first.</p>
              <v-btn
                :loading="confirmDialog"
                color="primary"
                fab
                x-large
                @click="startCoding()"
              >
                <v-icon dark x-large>mdi-code-tags-check</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
    <v-dialog v-model="confirmDialog" persistent max-width="800">
      <v-card>
        <v-card-title class="headline">
          Am confirm to start with
          <strong> {{ choosedTest }} </strong></v-card-title
        >
        <v-card-text
          >I read and understand all instructions and ready to start
          <strong> {{ choosedTest }} </strong> first.

          <v-alert
            class="mt-5"
            text
            outlined
            color="deep-orange"
            icon="mdi-fire"
          >
            If you click confirm the test will start you can't come back if the
            test started.
          </v-alert>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="confirmDialog = false"
            >Disagree</v-btn
          >
          <v-btn color="green darken-1" text @click="confirmToStart"
            >Agree</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      selectionDialog: false,
      confirmDialog: false,
      choosedTest: 'Coding',
      currentStep: 1,
      instructions: [
        {
          title: 'Befor Begining the test',
          subTitle: 'please read comlete and press next',
          description: `orem ipsum dolor, sit amet consectetur adipisicing elit. Libero illum,
             molestias accusamus, quod voluptatibus magnam facilis culpa harum unde
              quasi cupiditate delectus omnis? Fugit atque sit deleniti repudiandae debitis animi?`
        },
        {
          title: 'During the test',
          subTitle: 'please read comlete and press next',
          description: `orem ipsum dolor, sit amet consectetur adipisicing elit. Libero illum,
             molestias accusamus, quod voluptatibus magnam facilis culpa harum unde
              quasi cupiditate delectus omnis? Fugit atque sit deleniti repudiandae debitis animi?`
        },
        {
          title: 'After the test',
          subTitle: 'please read comlete and press next',
          description: `orem ipsum dolor, sit amet consectetur adipisicing elit. Libero illum,
             molestias accusamus, quod voluptatibus magnam facilis culpa harum unde
              quasi cupiditate delectus omnis? Fugit atque sit deleniti repudiandae debitis animi?`
        }
      ]
    }
  },
  methods: {
    nextStep() {
      if (this.currentStep === this.instructions.length) {
        // this.selectionDialog = true
        this.confirmToStart()
      } else {
        this.currentStep += 1
      }
    },
    back() {
      if (this.currentStep === 1) {
        this.$router.push('/')
      } else {
        this.currentStep -= 1
      }
    },
    startMCQ() {
      this.choosedTest = 'Multiple Choice Questions'
      this.confirmDialog = true
    },
    startCoding() {
      this.choosedTest = 'Coding'
      this.confirmDialog = true
    },
    confirmToStart() {
      if (this.choosedTest === 'Coding') {
        this.$router.push('/test/programing-test')
      } else {
        this.$router.push('/test/multiple-choice-test')
      }
    }
  }
}
</script>

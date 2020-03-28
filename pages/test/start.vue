<template>
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
        <v-btn color="primary" @click="nextStep">Next</v-btn>
        <v-btn text @click="back">Back</v-btn>
      </v-stepper-content>
    </template>
  </v-stepper>
</template>
<script>
export default {
  data() {
    return {
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
        this.$router.push('/')
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
    }
  }
}
</script>

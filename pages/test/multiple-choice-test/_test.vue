<template>
  <v-stepper
    v-if="ok"
    v-model="e1"
    :vertical="vertical"
    :alt-labels="altLabels"
  >
    <template v-for="(question, n) in mcqs">
      <v-stepper-step
        :key="`${n + 1}-step`"
        :complete="answers[n].submited"
        :step="n + 1"
        :editable="!answers[n].submited"
        :rules="[() => answers[n].submited || !answers[n].marked]"
      >
        Question {{ n + 1 }}
        <small>{{
          answers[n].submited
            ? 'Submitted'
            : answers[n].marked
            ? 'Marked for review'
            : 'Not attended'
        }}</small>
      </v-stepper-step>

      <v-stepper-content :key="`${n}-content`" :step="n + 1">
        <v-card class="mb-12" elevation="10" color="lighten-1">
          <v-card-text>
            {{ question.question }}
          </v-card-text>
          <v-card-text>
            <v-radio-group
              v-model="answers[n].answer"
              row
              class="justify-space-between"
              mandatory
            >
              <v-radio
                color="success"
                value="Non"
                label="None of these"
              ></v-radio>
              <v-radio
                v-for="(option, i) in question.options"
                :key="i"
                color="success"
                :value="option.code"
                :label="option.value"
              ></v-radio>
            </v-radio-group>
          </v-card-text>
          <v-card-actions class="d-block d-sm-flex">
            <v-spacer></v-spacer>
            <v-btn
              class="ma-3"
              :disabled="lastQuestion"
              color="error"
              @click="markForReviw(n)"
              >Mark for review
            </v-btn>
            <v-btn class="ma-3" :disabled="lastQuestion" @click="nextStep(n)">
              Skip
            </v-btn>
            <v-btn
              class="ma-3"
              :loading="complete"
              color="primary"
              @click="submit(n)"
            >
              Submit
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-stepper-content>
    </template>
  </v-stepper>
</template>
<script src="./_test.script.js"></script>

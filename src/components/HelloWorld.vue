<template>
  <v-container class="fill-height w100">
    <v-sheet class="text-center fill-height mx-auto rounded-lg w100 grey-darken-1"> 
      <v-img height="300" src="@/assets/PostXING.png" />

      <div class="text-body-2 font-weight-light mb-n1">Welcome to</div>

      <h1 class="text-h2 font-weight-bold">Post XING</h1>

      <div class="py-14" />

      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <v-btn
            href="javascript:void(0)"
            min-width="164"
            variant="text"
          >
            <v-icon
              icon="mdi-history"
              size="large"
              start
            />

            History
          </v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn
            color="primary"
            href="javascript:void(0)"
            min-width="228"
            size="x-large"
            variant="flat"
          >
            <v-icon
              icon="mdi-signal-distance-variant"
              size="large"
              start
            />

            Get Started
          </v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn
            href="javascript:void(0)"
            min-width="164"
            variant="text"
          >
            <v-icon
              icon="mdi-clipboard-arrow-down-outline"
              size="large"
              start
            />

            Community
          </v-btn>
        </v-col>
      </v-row>
    </v-sheet>
  </v-container>
</template>

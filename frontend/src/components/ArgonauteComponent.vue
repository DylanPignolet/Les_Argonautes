<template>
  <v-container fluid>
    <v-app>
      <header>
        <h1>
          <img src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png" alt="Wild Code School logo" />
          Les Argonautes
        </h1>
      </header>
    </v-app>
    <!-- Main section -->
    <main>
      
      <!-- New member form -->
      <h2>Ajouter un(e) Argonaute</h2>
      <v-form @submit.prevent="argonaute" v-model="valid" class="new-member-form">
        <v-text-field
                :rules="rules"
                label="name"
                clearable
                v-model="name"
                id="name"
                placeholder="Charalampos"
                type="text"
                class="form"
        />
        <v-btn
                  @click="argonaute"
                  :disabled="!valid"               
                >
                  Envoyer
        </v-btn>
      </v-form>
      
      <!-- Member list -->
      <h2>Membres de l'équipage</h2>
      <section class="member-list">
        <div v-for="argonaute in argonautes" v-bind:key="argonaute.id" class="member-item">{{argonaute.name}}</div>
      </section>
    </main>

    <footer>
      <p>Réalisé par Jason en Anthestérion de l'an 515 avant JC</p>
    </footer>
  </v-container>
</template>

<script>
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000/api/";

export default {
  name: "Argonaute",
  components: {
  },
  data() {
    return {
      argonautes: [],
      name: "",
      valid: true,
      rules: [
        (value) => !!value || "Champs obligatoire",
        (value) => (value || "").length <= 50 || "50 charactères max",
      ],
    };
  },
  methods: {
    argonaute: function () {
      let argonaute = {
        name: this.name,
      };

      axios.post("/argonaute", argonaute).then((response) => {
        console.log(response);
        if (response.status == 200) {
          location.reload()
        }
      });
    },

    showArgonautes: function () {
      axios.get("/argonaute")
      .then((response) => {
          this.argonautes = localStorage.setItem(
            "argonauteName",
            JSON.stringify(response.data)
          );
          this.argonautes = response.data;
        });
    }
  },
  beforeMount() {
    this.showArgonautes();
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

.v-application--wrap {
  min-height: 30vh !important;
}

body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
}

main {
  max-width: 960px;
  margin: 0 auto;
}

header {
  background: #f4f4f4;
  text-align: center;
  padding: 2em;
}

header img {
  max-width: 96px;
}

header h1 {
  font-size: 2.5em;
}

h1, h2 {
  text-align: center;
}

label {
  display: block;
  margin-bottom: 0.5em;
}

.new-member-form {
  margin: 2em 0 4em 0;
  text-align: center;
}

.member-item {
  padding: 0.25em 0;
}

footer {
  margin-top: 2em;
  text-align: center;
  color: #fff;
  background: #f76c6c;
  padding: 0.25em 0;
} 
</style>

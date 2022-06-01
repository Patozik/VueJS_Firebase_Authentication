<template>
  <main class="main">
      <section class="forms">
          <form class="register" @submit.prevent="register">
            
            <h2>Rejestracja</h2>
            
            <input 
                type="email" 
                placeholder="Adres email"
                v-model="register_form.email"
            />
            
            <input 
                type="password" 
                placeholder="Hasło" 
                v-model="register_form.password"
            />

            <input
                type="submit"
                value="Zarejestruj"
            />

          </form>
          
          <form class="login" @submit.prevent="login">

           <h2>Logowanie</h2>
            
            <input 
                type="email" 
                placeholder="Adres email"
                v-model="login_form.email"
            />
            
            <input 
                type="password" 
                placeholder="Hasło" 
                v-model="login_form.password"
            />

            <input
                type="submit"
                value="Zaloguj"
            /> 
            
          </form>
      </section>
  </main>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
    setup () {
        const login_form = ref({});
        const register_form = ref ({});
        const store = useStore();

        const login = () => {
            store.dispatch('login', login_form.value);
        }

        const register = () => {
            store.dispatch('register', register_form.value);
        }

        return {
            login_form,
            register_form,
            login,
            register
        }
    }
}
</script>

<style>

.forms {
    min-height: 100vh;
    display: flex;
    margin: 0 14rem;
    align-items: center;
    vertical-align:middle;
}

form {
    flex: 1 1 0%;
    padding: 8rem 1rem;
}

form.register {
    
    color: #FFF;
    background-color: #FF5500;
    background-image: linear-gradient(
        to bottom right,
        #FF8040 0%,
        #BF4000 100%
    );

    border-radius: 4rem 0 0 4rem;
    border-style: solid;
    border-right-style: none;
    border-color: #000 ;
    box-shadow: 2rem 2rem 2rem rgba(0, 0, 0, 0.5);
}

form.login {
    border-radius: 0 4rem 4rem 0;
    border-style: solid;
    border-left-style: none;
    border-color: #000;

    background-color: #FFF;

    box-shadow: 2rem 2rem 2rem rgba(0, 0, 0, 0.5);
}

h2 {
    font-size: 2rem;
    text-transform: uppercase;
    margin-bottom: 2rem;
    text-shadow: 0.1rem 0.1rem 0rem rgba(0, 0, 0, 0.5);
}

input {
    appearance: none;
    border: none;
    outline: none;

    display: block;
    width: 100%;
    max-width: 400px;
    margin: 0 auto; 
    font-size: 1.5rem;
    margin-bottom: 2rem;
    padding: 0.5rem 0.5rem;

    box-shadow: 0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.5);
}

form.register input:not([type="submit"]) {
    background-color: #FFF;
    border-radius: 0.5rem;
    
}

form.register input[type="submit"] {
    text-transform: uppercase;
    cursor: pointer;
    border-radius: 0.5rem;
}

form.login input:not([type="submit"]) {
    background-color: #FF8040;
    border-radius: 0.5rem;
    
}

form.login input[type="submit"] {
    text-transform: uppercase;
    cursor: pointer;
    border-radius: 0.5rem;
    background-color: #FF5500;
}


</style>
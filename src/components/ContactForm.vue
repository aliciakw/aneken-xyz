<template>
  <form class="ContactForm flex flex-col" v-on:submit="onSubmit">
    <input v-model="subject.value" placeholder="subject" />
    <input v-model="name.value" placeholder="your name" />
    <input v-model="email.value" placeholder="your email" />
    <textarea v-model="message.value" placeholder="Drop me a line" cols="60" />
    <input type="submit" role="submit" />
  </form>
</template>
<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      hasError: false,
      subject: {
        value: '',
        hasError: false,
      },
      name: {
        value: '',
        hasError: false,
      },
      email: {
        value: '',
        hasError: false,
      },
      message: {
        value: '',
        hasError: false,
      },
    }
  },
  methods: {
    onValidate(formFields) {
      let isValid = true
      console.log('validating:', formFields);
      const fieldNames = Object.keys(formFields);
      let fieldName;
      for (var i = 0; i < fieldNames.length; i++) {
        fieldName = fieldNames[i];
        if (formFields[fieldName]) { // validate string presence
          if (this[fieldName].hasError) this[fieldName].hasError = false;
        } else {
          this[fieldName].hasError = true;
          if (isValid) isValid = false;
        }
      }
      return isValid;
    },
    onResetForm() {
      this.subject = {
        value: '',
        hasError: false,
      };
      this.name = {
        value: '',
        hasError: false,
      };
      this.email = {
        value: '',
        hasError: false,
      };
      this.message = {
        value: '',
        hasError: false,
      };
    },
    onSubmit: function(e) {
      e.preventDefault();   
      try {
        console.log('submit....');
        const data = {
          subject: this.subject.value,
          name: this.name.value,
          email: this.email.value,
          message: this.message.value
        };
        const isValid = this.onValidate(data);
        console.log('isValid', isValid)
        if (isValid) {
          // send email

          //
          this.onResetForm()
        } 
      } catch (e) {
        console.log('ERROR', e);
      }
    }
  }
}
</script>
<style scoped>
.ContactForm {
  max-width: 400px;
}
</style>
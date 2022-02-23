import React from 'react';
import * as styles from '../styles/modules/ContactForm.module.scss';

/* 
 * -= ContactForm =-
 * Returns a form that contains all of the fields contained
 * in the 'fields' prop and sends the result to the endpoint
 * defined in the 'endpoint' prop.
 * 
 * 'fields' is an array of objects with the following structure.
 * (NB. if field == 'multi', then content is an array of subfields)
 * { 
 *     type: the type of this field - multi, text, textarea
 *     content {
 *       displayName: the name of the field as it areas in the label
 *       name: the name of the field as it appear in the POST data
 *     }
 * }
 */

export default function ContactForm({fields}) {
  const handleSubmit = event => {
    event.preventDefault();
    // TODO: send form data via email
  };

  const createFormField = field => {
    // render multi fields by iterating over their subfields
    if (field.type === 'multi') {
      return (
        <div className={styles.formGridRow}>
          {field.content.map((subfield, i) => {
            return(
              <div 
                key={i}
                className={styles.formInputLabelGroup}
              >
                <div className={styles.formInputLabelGroup}>
                  <label>{subfield.content.displayName}
                    <input 
                      type={subfield.content.type}
                      name={subfield.content.name}/>
                  </label>
                </div>
            </div>
            )
          })}
        </div>
      )
    }
    // render textareas
    else if(field.type === 'textarea') {
      return(
        <div className={styles.formGridRow}>
          <div className={styles.formInputLabelGroup}>
            <label>{field.content.displayName}
              <textarea 
                className={styles.lrgTextField} 
                type='text' 
                name={field.content.name}/>
            </label>
          </div>
        </div>
      )
    }

    // render text inputs
    else if (['email', 'text'].includes(field.type)) {
      return(
        <div className={styles.formGridRow}>
          <div className={styles.formInputLabelGroup}>
            <label>{field.content.displayName}
              <input 
                type={field.content.type}
                name={field.content.name}/>
            </label>
          </div>
        </div>
      )
    }
  };

  return(
    <form 
      className={styles.formGrid}
      onSubmit={handleSubmit}
    >
      {fields.map(field => {return createFormField(field)})}    
      <div className={styles.formGridRow}>
        <button className={styles.submitBtn} type='submit'>
          Submit
        </button>
      </div>
    </form>
  );
}
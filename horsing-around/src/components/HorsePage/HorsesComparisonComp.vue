<template>
    <div  class="comp">
        <table id="horseComp" class="auto-index">
            <tr class="Header_Row">
                <th class="first_col">Select Horse:</th>
                <th>
                    <select id="first_horse_name" name="horse_name" v-model="key" @change="clicked_first($event)">
                        <optgroup>
                            <option class="horse_name second_col">Horsie the Borsie</option>
                            <option class="horse_name second_col">Jack o Lantern</option>
                            <option class="horse_name second_col">Mac Donalds Book</option>
                        </optgroup>
                    </select>
                </th> 
                <th>
                    <select name="horse_name" v-model="selected" @click="clicked_second">
                        <optgroup>
                            <option class="horse_name third_col">Horsie the Borsie</option>
                            <option class="horse_name third_col">Jack o Lantern</option>
                            <option class="horse_name third_col">Mac Donalds Book</option>
                        </optgroup>
                    </select>
                </th> 
                <th>
                    <select name="horse_name" v-model="selected" @click="clicked_third">
                        <optgroup>
                            <option class="horse_name fourth_col">Horsie the Borsie</option>
                            <option class="horse_name fourth_col">Jack o Lantern</option>
                            <option class="horse_name fourth_col">Mac Donalds Book</option>
                        </optgroup>
                    </select>
                </th> 
            </tr>

            <tr class="name">
                <td class = "first_row first_col">Name</td> 
                <td class = "first_row">name1</td> 
                <td class = "first_row">name2</td> 
                <td class = "first_row">name3</td> 
            </tr>

            <tr class="recent_form">
                <td class = "first_col">Recent Form</td> 
                <td>1-2-2-2-3-1</td> 
                <td>1-2-2-2-3-1</td> 
                <td>1-2-2-2-3-1</td> 
            </tr>

            <tr class="trainer">
                <td class="first_col"> Trainer </td>
                <td> P Shaw </td>
                <td> P Shaw </td>
                <td> P Shaw </td>
            </tr>

            <tr class="jockey">
                <td class="last_row first_col" > Jockey </td>
                <td class="last_row">sid</td> 
                <td class="last_row">sid</td> 
                <td class="last_row">sid</td> 
            </tr>
        </table>
        <br /><br />
  </div>

</template>

<script>
export default {
    name: "HorsesComparisonComp",
    methods:{
        clicked_first(event) {
            alert("clicked");
            console.log(event);
            //alert(event.target.selectedOptions[0].innerHTML);
        }
    }
}
</script>

<style scoped>

.auto-index {
    width: 100%;
    border-collapse: separate;
    border-spacing: 10px 0;
}

th {
    padding: 10px;
}

td {
  padding: 10px;
  background-color:beige ;
  
}

.last_row {
    border: solid 1px #000;
    border-style: none none solid none;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}

.first_row {
    border: solid 1px #000;
    border-style: solid none none none;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}
.first_col {
    width: 10%;
}

</style>
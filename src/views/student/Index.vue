<template>

	<div class="container my-5">
	 	<div class="row justify-content-center">
	 		<div class="col-8">
	 			<router-link :to="{ name: 'student.create' }" class="btn btn-primary btn-sm rounded shadow mb-3 btn-success">Add</router-link>

	 				<div class="card rounded shadow">
	 					<div class="card-header">
	 						Student List
	 					</div>
	 					
	 					<table class="table">
	 						<thead>
	 							<tr>
	 								<th>Avatar</th>
	 								<th>Name</th>
	 								<th>Gender</th>
	 								<th>DOB</th>
	 								<th>Action</th>
	 							</tr>
	 						</thead>
	 						<tbody>
	 							<tr v-for="student in students">
	 								<td>{{ student.avatar }}</td>
	 								<td>{{ student.name }}</td>
	 								<td>{{ student.gender }}</td>
	 								<td>{{ student.dob }}</td>
	 								<td>
	 									<div class="btn-group">
	 										<router-link :to="{name: 'student.update',  params: { id: 1}}" class="btn btn-sm btn-outline-info">EDIT</router-link>
	 										<button class="btn btn-sm btn-outline-danger">Delete</button>
	 									</div>
	 								</td>
	 							</tr>
	 						</tbody>
	 					</table>
	 				</div>
	 		</div>
	 	</div>
	</div>

</template>

<script>
import axios from 'axios'
import {onMounted, ref} from 'vue'

export default {
	  data() {
            return {
              students: {},
            }
        },
        methods: {
            getStudent(){
                axios.get('http://127.0.0.1:8000/api/student')
                     .then((response)=>{
                     console.log(response)
                       this.students = response.data.student
                     })
            }
        },
        created() {
            this.getStudent()
        }
}

</script>
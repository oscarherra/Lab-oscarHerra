import {defineStore} from "pinia";
import {ref} from "vue";
import {v4 as uuidv4} from 'uuid';

export const useProjectsStore = defineStore ('projects', 


)


interface Project {
id: string

}

interface Task{
id: string;
name: string;

}

export const useProjectsStore{


}

function addProject(name: string){
if(!name) return;

projects.value.push({
id: uuidv4;

});

}

//const
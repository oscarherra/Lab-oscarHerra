
<template>

<TopBar/>

<div class="container">
 <FabButton></FabButton>
  <aside class="barraizquierda a">

  <details class="dropdown-top bg-base-500">
    <summary class="btn m-1">Proyectos</summary>
    <ul class="menu dropdown-content bg-white z-1 w-52 p-2 shadow-sm">
      <li><a>No hay proyectos</a></li>
    </ul>
  </details>

  <ul class="menu bg-base-500 text-white">
    <li><a>Item 1</a></li>
    <li>
      <details open>
        <summary>Parent</summary>
        <ul>
          <li><a>Submenu 1</a></li>
          <li><a>Submenu 2</a></li>
          <li>
            <details open>
              <summary>Parent</summary>
              <ul>
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </details>
    </li>s
    <li><a>Item 3</a></li>
  </ul> 
  </aside>

  <div class="contenido b"> <RouterView /> </div>
</div>

</template>
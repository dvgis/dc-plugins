uniform vec4 color;
uniform float percent;
czm_material czm_getMaterial(czm_materialInput materialInput)
{
  czm_material material = czm_getDefaultMaterial(materialInput);
  vec2 st = materialInput.st;
  float alpha = color.a ;
  if(st.t < percent){
    alpha =  color.a * smoothstep(0.0,1.0,st.t * 0.5);
  }
  material.diffuse = color.rgb  * 1.3 ;
  material.alpha = alpha;
  return material;
}
